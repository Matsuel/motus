import { useEffect, useState } from 'react';
import { currentWordAtom } from '../atoms/gameDatas';
import { useSetAtom } from 'jotai';

const useWord = () => {
    const [word, setWord] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const setCurrentWord = useSetAtom(currentWordAtom);

    useEffect(() => {
        const fetchWord = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://trouve-mot.fr/api/random');
                const data = await response.json();
                const wordToGuess = String(data[0].name).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c");
                setWord(wordToGuess);
                setCurrentWord(wordToGuess[0].toUpperCase());
                setLoading(false);
            } catch (error) {
                setWord("");
                setLoading(false);
                setError("Une erreur est survenue" + error);
            }
        }

        fetchWord()
    }, [])

    return { word, loading, error };
};

export default useWord;
