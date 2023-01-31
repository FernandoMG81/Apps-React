import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        username: 'FernandoMG81',
        name: 'Fernando Martin Gordillo',
        isFollowing: true
    },
    {
        username: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        username: 'chesterlp40',
        name: 'Ezequiel Rasgido',
        isFollowing: false
    },
]



export function App () {

    return(
        <section className='App'>
            {
                users.map(({ username, name, isFollowing}) => {
                        return (
                        <TwitterFollowCard
                        key={username} 
                        initialIsfollowing={isFollowing}
                        username={username}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}