// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const runtime = 'edge'; // required for cloudflare

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
