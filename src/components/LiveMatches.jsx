import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLiveMatches } from '../features/thunks/matchesThunk.js'

const LiveMatches = () => {
    const dispatch = useDispatch();
    const { liveMatches, loading, error } = useSelector((state) => state.matches);

    useEffect(() => {
        dispatch(fetchLiveMatches());
    }, [dispatch]);

    if (loading) return <p>Loading live matches...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Live Matches</h2>
            {liveMatches.map((match) => (
                <div key={match.fixture.id}>
                    <p>{match.teams.home.name} vs {match.teams.away.name}</p>
                    <p>Score: {match.goals.home} - {match.goals.away}</p>
                </div>
            ))}
        </div>
    );
};

export default LiveMatches;
