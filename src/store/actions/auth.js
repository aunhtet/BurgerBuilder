import * as actionType from './actionTypes';



export const authStart = () => {
    return {
        type: actionType.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionType.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFailed= (error) => {
    return {
        type: actionType.AUTH_FAILED,
        error: error
    };
};

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: actionType.AUTH_INITITATE_LOGOUT
    };
};

export const logoutSucceed = () => {
    return {
        type: actionType.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionType.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
};

export const auth = (email, password, isSignup) => {
    return {
        type: actionType.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    }
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionType.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return {
        type: actionType.AUTH_CHECK_STATE
    }
}