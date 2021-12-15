const listHelper = require('../utils/list_helper')

const blogPosts = [
  {
    _id: '4380u438hr2fh0',
    title: 'post',
    author: 'whom',
    url: 'whom.com',
    likes: 4,
    _v: 99
  },
  {
    _id: '4380u438hr2fh0',
    title: 'post',
    author: 'whom',
    url: 'whom.com',
    likes: 41,
    _v: 99
  },
  {
    _id: '4380u438hr2fh0',
    title: 'post',
    author: 'whom',
    url: 'whom.com',
    likes: 44,
    _v: 99
  },
  {
    _id: '4380u438hr2fh0',
    title: 'post',
    author: 'whom',
    url: 'whom.com',
    likes: 33,
    _v: 99
  }
]

test('dummy returns 1', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})


describe('total likes', () => {
  const singlePost = [
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
    const result = listHelper.totalLikes(singlePost)
    expect(result).toBe(4)
  })
})

describe('most likes', () => {
  test('most likes of all the blog posts', () => {
    const result = listHelper.favoriteBlog(blogPosts)
    expect(result).toEqual(
      {
        _id: '4380u438hr2fh0',
        title: 'post',
        author: 'whom',
        url: 'whom.com',
        likes: 44,
        _v: 99
      }
    )
  })
})