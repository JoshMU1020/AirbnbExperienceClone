import data from './data'
import Card from './Card.jsx'

export default function Experiences() {
    const expereienceElements = data.map(exp => {
        return <Card 
            key={exp.id} 
            {...exp} />
    })
    return (
        <section className='experiences'>
            {expereienceElements}
        </section>
    )
}