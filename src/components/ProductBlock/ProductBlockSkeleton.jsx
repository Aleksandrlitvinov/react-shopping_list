import React from "react"
import ContentLoader from "react-content-loader"

const ProductBlockSkeleton = (props) => (
  <ContentLoader
    className="product-block"
    speed={2}
    width={260}
    height={303}
    viewBox="0 0 260 303"
    backgroundColor="#d6d6d6"
    foregroundColor="#bababa"
  >
    <rect x="299" y="67" rx="3" ry="3" width="53" height="11"/>
    <rect x="304" y="42" rx="3" ry="3" width="72" height="11"/>
    <rect x="9" y="25" rx="30" ry="30" width="250" height="150"/>
    <rect x="5" y="321" rx="0" ry="0" width="290" height="8"/>
    <rect x="336" y="6" rx="0" ry="0" width="5" height="93"/>
    <rect x="282" y="7" rx="0" ry="0" width="8" height="323"/>
    <rect x="40" y="193" rx="5" ry="5" width="184" height="16"/>
    <rect x="23" y="259" rx="3" ry="3" width="47" height="28"/>
    <rect x="137" y="257" rx="12" ry="12" width="111" height="30"/>
    <rect x="15" y="220" rx="7" ry="7" width="240" height="26"/>
  </ContentLoader>
)

export default ProductBlockSkeleton
