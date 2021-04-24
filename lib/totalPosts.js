export const totalPosts = async () => {
  const directory = path.join(process.cwd(), 'documents')
  const filenames = await fs.readdir(directory)
}
