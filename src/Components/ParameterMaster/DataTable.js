import React, { useEffect } from 'react';
import 'jquery';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';
import '../Css/DataTable.css'
function DataTableComponent() {
  useEffect(() => {
    // Initialize DataTable
    $('#example').DataTable({
      searching: false,
    });

  }, []);

  return (
    <div>
    
      <table id="example" className="display mt-5" style={{ width: '100%' }}>

        <thead className='bg-primary text-light'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>

        {/* </div>
        </div> */}
      </table>
    </div>
  );
}

export default DataTableComponent;
