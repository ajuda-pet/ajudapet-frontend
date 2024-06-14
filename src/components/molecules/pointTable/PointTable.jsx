import { Alert, Table } from 'react-bootstrap'
import './PointTable.css'
import pointsController from '../../../controllers/points.controller'
import NoContent from '../../organism/NoContent/NoContent'

const PointTable = ({ points }) => {
    return (
        <>
            {!points.length && <NoContent message='Ops! Ainda não temos pontos de adoções'></NoContent>}

            {points.length > 0 && <Table striped bordered hover size="sm">
                <thead className='p-5'>
                    <tr>
                        <th>🏡 Ponto de Adoção</th>
                        <th>📍 Endereço</th>
                        <th>🐾 Σ Pets</th>
                        <th>🗓️ Data</th>
                    </tr>
                </thead>
                <tbody>
                   {points && points.length && points.map(point => (
                        <tr key={point.id}>
                            <th>{point.name}</th>
                           <th>{point.addressStreet}, {point.addressNumber}. {point.addressNeighborhood}. {point.addressCity}, {point.addressState}.</th>
                            <th>{point.pets ? point.pets.length : 0}</th>
                            <th>{point.createdAt}</th>
                        </tr>
                   ))}
                </tbody>
            </Table>}
        </>
    )
}

export default PointTable