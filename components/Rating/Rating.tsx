import {useState, useEffect, JSX} from "react";
import s from './Rating.module.css'
import {RatingProps} from "@/components/Rating/Rating.props";
import cn from "classnames";
import {Star} from "@/assets/icons";

const Rating = ({rating, isEditable = false, setRating, ...rest}: RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);


    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <Star className={cn(s.star, {
                    [s.filled]: index < currentRating,
                    [s.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(index + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onKeyDown={(e) => {
                          isEditable && handleSpace(e, index + 1)
                      }}
                      onClick={() => onClickHandler(index + 1)}
                      tabIndex={isEditable ? 0 : -1}
                />
            );
        });
        setRatingArray(updatedArray);
    };

    const handleSpace = (e, i: number) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClickHandler = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i)
    }
    return (
        <div {...rest}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};

export default Rating;
