const Hero = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <div
            className="fancy-hero-three relative overflow-hidden py-20 lg:py-32"
            style={{ background: 'var(--secondry-bg)' }}
        >
            <div className="shapes shape-one" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <div className="shapes shape-two" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <div className="shapes shape-three" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <div className="shapes shape-four" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <div className="shapes shape-five" style={{ backgroundColor: 'var(--main-color)' }}></div>
            <div className="shapes shape-six" style={{ backgroundColor: 'var(--main-color)' }}></div>

            <div className="bg-wrapper relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-9/12 lg:w-10/12 mx-auto">
                            <h1 className="heading text-4xl lg:text-5xl font-bold text-center text-gray-900">
                                {title}
                            </h1>
                            <p className="sub-heading text-lg text-center text-gray-600 mt-4">
                                {subTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;