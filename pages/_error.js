import Brudcrums from "../components/Fontend/Brudcrums";
function Error({ statusCode }) {
    return (
      <>
       <Brudcrums/>
      <div className="container errorfullsize" >
          
        <div className="row" >
        <div className="col-md-12 text-center" >
          <h1 className="mbr-fonts-style mbr-text align-center mbr-light display-2 ">     
          {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
          </h1>
      
          <a href="/" className="btn btn-md btn-info display-4 btn-success">Home</a>
          
          </div>
      </div>
      </div>
      </>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error