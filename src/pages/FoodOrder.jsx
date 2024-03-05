const FoodOrder = () => {
    return (
        <div className="Cards py-2">
            <h1>Food Order</h1>
            <table class="table mb-3 border">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Add Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Burger</td>
                        <td>1</td>
                        <td>30000</td>
                        <td class="btn-group">
                            <button class="btn btn-info"><i class="fa-solid fa-plus"></i></button>
                            <button class="btn btn-danger"><i class="fa-solid fa-minus"></i></button>
                        </td>
                    </tr>
                </tbody>
        </table>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98121.86133023696!2d64.34039636637253!3d39.7776390980954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1687345008821!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default FoodOrder