import { useEffect, useState } from 'react';
import moviesApi from './MoviesApi';

export const useApi = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isConected, setIsConected] = useState('')

  useEffect(() => {
    setLoading(true);
    moviesApi.getCards()
    .then((cards) => {
      setCards(cards)
      console.log(cards)
      setIsConected(true)
    })
    .catch(err => {
      console.log(err);
      setIsConected(false)
    })
    .finally(() => {
      setLoading(false);
  });
  }, [])

    return { cards, loading, isConected };
};
