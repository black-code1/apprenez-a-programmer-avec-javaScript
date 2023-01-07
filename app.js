// Create Object here
// =========================================
let episode = {
    title: 'Le js pour les avatar',
    duration: 15,
    hasBeenWatched: false
}


// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`