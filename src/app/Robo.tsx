import Spline from '@splinetool/react-spline';

export default function Robo() {
  return (
    <div className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="heading-secondary text-gradient mb-4">3D Robot Experience</h1>
          <p className="text-body">Interactive 3D scene powered by Spline</p>
        </div>
        
        <div className="glass-effect-strong rounded-3xl overflow-hidden card-hover">
          <div className="w-full h-[600px]">
            <Spline scene="https://prod.spline.design/btb7BohlaZtf5wvs/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}
