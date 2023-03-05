// Allow AMP elements to be a property on JSX.IntrinsicElements

declare namespace JSX {
    interface AmpImg {
      alt?: string
      src?: string
      width?: string | number
      height?: string | number
      layout?: string
      fallback?: string
      children?: React.ReactNode
    }
    interface IntrinsicElements {
      'amp-img': AmpImg
    }
  }
  