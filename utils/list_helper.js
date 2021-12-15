
const dummy = (blogs) => {
  blogs = 1
  return blogs
}

const totalLikes = (blogs) => {
  let likes = blogs.reduce((acc, curr) => acc += curr.likes, 0)
  return likes
}

const favoriteBlog = (blogs) => {
  var max = blogs.reduce((acc, curr) => acc.likes > curr.likes ? acc : curr)
  return max
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}