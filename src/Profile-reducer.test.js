import profileReducer, { createPostActionCreator } from './redux/profileReducer'

it('this post length should be increment', () => {
    let action = createPostActionCreator('Hello, friends')
    let state = {
        posts: [
            { id: 0, text: 'Отличный выдался денек!', likeCounter: '138' },
            { id: 1, text: 'Победа', likeCounter: '83' },
            { id: 2, text: 'Кек', likeCounter: '12' },
            { id: 3, text: 'Лол', likeCounter: '7' },
            { id: 4, text: 'React - пушка', likeCounter: '999' }
        ]
    };

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)
})