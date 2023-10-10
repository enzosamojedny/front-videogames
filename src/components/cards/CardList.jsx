import Card from './Card'
function CardList({ games }) {

    return (
        <div>
            <Card games={games} />
        </div>
    )
}

export default CardList