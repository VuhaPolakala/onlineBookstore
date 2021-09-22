import reducer, { initialUserState, clearLoginStatus, setUserObj } from '../store/userSlice';

// it("should return the initial state", () => {
//     expect(reducer(undefined, {})).toEqual(initialUserState)
// })

it("should set the user", () => {
    expect(reducer(initialUserState, setUserObj({ name: "testUser", email: "test@test.com" }))).toEqual({
        userObj: { name: "testUser", email: "test@test.com" }, isAuth: true,
        isLoading: false,
        isError: "", allUsers: []
    })
})

it("should reset the user", () => {
    expect(reducer({
        userObj: { name: "testUser", email: "test@test.com" }, isAuth: true,
        isLoading: false,
        isError: "", allUsers: []
    }, clearLoginStatus())).toEqual(initialUserState)
})