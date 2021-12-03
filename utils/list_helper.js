
const dummy = (blogs) => {
  blogs = 1
  return blogs
}

const totalLikes = (blogs) => {
  let likes = blogs.reduce((acc, curr) => acc += curr.likes, 0)
  return likes
}

module.exports = {
  dummy,
  totalLikes
}