import { Component } from "react";
import '../card/card.styles.css'

class Card extends Component
{

    render()
    {
        const  {id,name,email} = this.props.monsters;
        return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${id}?set=set2`}
                alt={`monster` + name}
              />
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
        );
    }

}

export default Card;