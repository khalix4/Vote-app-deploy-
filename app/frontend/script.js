function submitVote() {
    const selectedCandidate = document.querySelector('input[name="vote"]:checked');

    if (selectedCandidate) {
        const voteValue = selectedCandidate.value;

        // Send the vote to the server (back-end)
        fetch('/api/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ vote: voteValue }),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Vote submitted for ${data.vote}.`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please select a candidate before submitting your vote.');
    }
}
