import s from './style.module.css';
import cardBack from './img/card-back-side.jpg';
import { useState } from 'react';

const PokemonCard = ({ img, name, type, id, values: {top, left, right, bottom} }) => {

    const [isActive, setActive] = useState(false);

    const handlerClick = () => {
        setActive(!isActive);
    };

    return (
        <div className={s.root} onClick={handlerClick}>
            <div className={`${s.pokemonCard} ${isActive ? s.active : ''}`}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{top}</div>
                                <div className={`${s.count} ${s.right}`}>{right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={cardBack} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PokemonCard;