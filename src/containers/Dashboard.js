import 'bootstrap/dist/css/bootstrap.min.css';
import Networking from '../components/Networking.jsx';
import As_400 from '../components/As_400.jsx'
import Modelado_serv from '../components/Modelado_serv.jsx'
import Plataforma from '../components/Plataforma.jsx'
import Sistema_op from '../components/Sistema_op.jsx'
import Vmware from '../components/Vmware.jsx'
function Dashboard() {
    return (
      <div className = 'container-fluid'>
          <h2 className = 'title'>ESTADO DE SERVICIOS</h2>
          <div className = 'row'>
            <div className = 'col-sm-4'>
            <h3 className = 'title-service'>Networking</h3>
                <Networking/>
            </div>
            <div className = 'col-sm-4'>
            <h3 className = 'title-service'>AS/400</h3>
              <As_400/>    
            </div>
            <div className = 'col-sm-4'>
            <h3 className = 'title-service'>Modelado de servicios</h3>
              <Modelado_serv/>
            </div>
          </div>
          <div className = 'row'>  
            <div className = 'col-sm-6'>
              <h3 className = 'title-service'>Plataforma</h3>
                <Plataforma/>               
            </div>
            <div className = 'col-sm-6'>
              <h3 className = 'title-service'>Sistema operativo</h3>
              <Sistema_op/>
            </div>
          </div>
          <div className ='row'>
            <div className = 'col-sm-12'>
              <h3 className = 'title-service'>VMWARE</h3>
              <Vmware/>
            </div>
          </div>
      </div>
    );
  }
  
  export default Dashboard;