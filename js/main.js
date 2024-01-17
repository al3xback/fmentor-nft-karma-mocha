const getBodyContent = () => {
	const content = `
        <div id="wrapper">
            <header>
                <h1 class="sr-only">NFT</h1>
            </header>

            <main>
                <div class="container">
                    <article class="card">
                        <div class="card__image">
                            <img
                                width="302"
                                height="302"
                                src="./images/equilibrium.jpg"
                                alt="" />
                        </div>
                        <div class="card__content">
                            <h2 class="card__title">
                                <a href="#" class="btn btn--link"
                                    >Equilibrium #3429</a
                                >
                            </h2>
                            <p class="card__desc">
                                Our Equilibrium collection promotes balance and
                                calm.
                            </p>
                            <ul class="card__stats-list">
                                <li class="card__stats-list-item">
                                    <i class="icon-ethereum" aria-hidden="true"></i>
                                    <span>0.041 ETH</span>
                                </li>
                                <li class="card__stats-list-item">
                                    <i class="icon-clock" aria-hidden="true"></i>
                                    <span>3 days left</span>
                                </li>
                            </ul>
                            <div class="card__author">
                                <img
                                    class="card__author-img"
                                    width="33"
                                    height="33"
                                    src="./images/avatar.png"
                                    alt="Jules Wyvern" />
                                <span class="card__author-desc"
                                    >Creation of
                                    <a href="#" class="btn btn--link"
                                        >Jules Wyvern</a
                                    ></span
                                >
                            </div>
                        </div>
                    </article>
                </div>
            </main>

            <footer>
                <div class="container">
                    <p>
                        Challenge by
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >Frontend Mentor</a
                        >. Coded by
                        <a
                            href="https://github.com/al3xback"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >al3xback</a
                        >.
                    </p>
                </div>
            </footer>
        </div>
    `;

	return content;
};
