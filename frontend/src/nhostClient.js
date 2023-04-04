import { NhostClient, NhostProvider } from '@nhost/react'

const nhost = new NhostClient({
    // subdomain: "local"
    subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
    region: process.env.REACT_APP_NHOST_REGION
  })

export default nhost;