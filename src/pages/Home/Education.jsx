import React from 'react';

const Education = () => {
    return (
        <div>
            <section id="education" className="py-16 px-4 bg-base-100">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">Education</h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="card bg-base-100 border border-gray-400 shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">
          Bachelor in Computer Science
        </h3>
        <p className="text-gray-600">
          XYZ University, Bangladesh <br />
          <span className="italic">2022 – Present</span>
        </p>
      </div>

      <div className="card bg-base-100 border border-gray-400 shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">
          Web Development & React Course
        </h3>
        <p className="text-gray-600">
          Self-learning & online tutorials <br />
          <span className="italic">Ongoing</span>
        </p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Education;