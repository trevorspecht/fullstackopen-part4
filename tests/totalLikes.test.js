const listHelper = require('../utils/list_helper')

describe('total likes', () => {
  const blogPosts = [
    {
      _id: '4380u438hr2fh0',
      title: 'post',
      author: 'whom',
      url: 'whom.com',
      likes: 4,
      _v: 99
    }
  ]

  test('total likes test with only one blog post', () => {
    const result = listHelper.totalLikes(blogPosts)
    expect(result).toBe(4)
  })
})
