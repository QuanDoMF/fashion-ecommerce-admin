
import BarLoader from 'react-spinners/BarLoader'
// import { FaFaceSmileBeam } from "react-icons/fa6";
import './SpinnerAddToProduct.css'
const SpinnerAddToProduct = () => {
  return (
    <div className="spinner vh-100 flex-column">
      <BarLoader size={80} color="#36d7b7" width={150} height={5} />
      <div className="d-flex align-items-center py-3">
        <p className="fw-bold fs-6">Adding products, please wait</p>
      </div>
    </div>
  )
}
export default SpinnerAddToProduct
