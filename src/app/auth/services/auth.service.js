const bcrypt = require('bcryptjs');
const { UserService } = require('../../user/services/user.service');
const { sign } = require('jsonwebtoken');
const { Config } = require('../../../config/config');

class AuthServices {
    async login(user) {
        try {
            const dbUser = await new UserService()
            .getOne({ email: user.email });
            if (!dbUser) {
                return Promise.reject("User not found");
            }
            const passwordMatch = await this.comparePwd(user.password, dbUser.password);
            if (!passwordMatch) {
                return Promise.reject("Invalid credentials");
            }
            const access = this.createToken({ id: dbUser._id }, "access");
            const refresh = this.createToken({ id: dbUser._id }, "refresh");
            return {
                access,
                refresh
            }
        } catch (err) {
            return Promise.reject(err);
        }
    }
    async register(user) {
        try {
            const dbUser = await new UserService()
            .getOne({ email: user.email });
            if (!!dbUser) {
                return Promise.reject("User already exist");
            }
            return this.encryptPwd(user.password).then((hashPwd) => {
                let data = user;
                data.password = hashPwd;
                return new UserService().create(data);
            }).catch((err) => {
                return Promise.reject(err);
            })
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async logout() {}

    async createToken(data, type) {
        const expiresIn = type == "access" ? '1h' : '240h';
        return sign(data, Config().SECRET, { expiresIn, });
    }

    encryptPwd(pwd) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return reject(err);
                }
                bcrypt.hash(pwd, salt, (err, hash) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(hash);
                });
            });
        })
    }

    comparePwd(string, hash) {
        return bcrypt.compare(string, hash)
    }
}

module.exports = {
    AuthServices
}
