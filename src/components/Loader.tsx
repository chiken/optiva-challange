import ContentLoader from "react-content-loader"

export const Loader = () => (
  <div className='col-12 col-sm-6 col-lg-3 my-2'>
	<ContentLoader 
		speed={2}
		viewBox="0 0 240 460"
		backgroundColor="#ff4848"
		foregroundColor="#ecebeb" 
	>
		<rect x="0"  rx="2" ry="2" width="100%" height="500" />
	</ContentLoader>
  </div>
)