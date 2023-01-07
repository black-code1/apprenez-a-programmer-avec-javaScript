// Create variables here
// =========================================
let episodeTitle = 'Le js pour les avatar';
let episodeDuration = 15
let hasBeenWatched = false
// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`