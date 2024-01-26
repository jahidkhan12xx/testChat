"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

function FaceBook() {
  return (
    <FacebookProvider appId="1043941203388547" chatSupport>
    <CustomChat pageId="105095754524175" minimized={false}/>
  </FacebookProvider>    
  )
}

export default FaceBook