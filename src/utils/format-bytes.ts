export const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0B'

  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const formattedSize = (bytes / Math.pow(1024, i)).toFixed(1)

  return `${formattedSize} ${sizes[i]}`
}
