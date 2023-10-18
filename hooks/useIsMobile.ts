import { useMediaQuery } from "usehooks-ts"

const useIsMobile = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return isMobile
}

export default useIsMobile
