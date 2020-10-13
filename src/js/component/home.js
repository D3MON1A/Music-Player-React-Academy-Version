import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [
				{
					title: "South Park",
					id: "south-park",
					author: "Kyle",
					url:
						"https://assets.breatheco.de/apis/sound/sounds/mario/songs/castle.mp3"
				},
				{
					title: "Thunder Cats",
					id: "thundercats",
					author: "Moonra",
					url:
						"https://assets.breatheco.de/apis/sound/sounds/videogame/fx_zelda_recorder.wav"
				},
				{
					title: "X-Men",
					id: "x-men",
					author: "Profesor",
					url:
						"https://assets.breatheco.de/apis/sound/sounds/cartoons/songs/x-men.mp3"
				}
			]
		};
		this.player = null;
	}

	componentDidMount() {
		this.pauseBtn.style.display = "none";
	}

	play(url = null) {
		if (url) this.player.src = this.host + url;
		this.player.play();
		this.playBtn.style.display = "none";
		this.pauseBtn.style.display = "inline-block";
	}
	pause() {
		this.player.pause();
		this.pauseBtn.style.display = "none";
		this.playBtn.style.display = "inline-block";
	}

	render() {
		const songs = this.state.songs.map((song, i) => {
			return (
				<div
					key={i}
					className="track"
					onClick={() => {
						this.play(song.url);
					}}>
					<div className="track__number">{i + 1}</div>
					<div className="track__title featured">
						<span className="title">{song.title}</span>
						<span className="feature">By {song.author}</span>
					</div>
					<div className="track__length">{song.length}</div>
				</div>
			);
		});

		return (
			<div className="player">
				<section className="content">
					<div className="tracks">{songs}</div>
				</section>
				<section className="current-track">
					<div className="current-track__actions">
						<a className="skipbackward">
							<i className="fas fa-caret-square-left" />
						</a>
						<a
							ref={elm => (this.playBtn = elm)}
							onClick={() => this.play()}>
							<i className="fas fa-play" />
						</a>
						<a
							ref={elm => (this.pauseBtn = elm)}
							onClick={() => this.pause()}>
							<i className="fas fa-pause-circle" />
						</a>
						<a className="skipforward">
							<i className="fas fa-caret-square-right" />
						</a>
					</div>
				</section>
				<audio ref={t => (this.player = t)} controls />
			</div>
		);
	}
}
