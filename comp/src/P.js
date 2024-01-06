
import styles from './myst.module.css';

function Product(props)
{
    return <>
    <table>
        <tr>
            <td>P-Name</td>
            <td>{ props.prd.name }</td>
        </tr>
        <tr>
            <td>P-ID</td>
            <td>{ props.prd.id }</td>
        </tr>
        <tr>
            <td>P-Price</td>
            <td>{ props.prd.price }</td>
        </tr>
    </table>

    </>
}

export default Product;