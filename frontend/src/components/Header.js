'use client';

export default function Header({ title }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
      <h2>{title}</h2>
      <div>
        {/* Placeholder for future buttons like settings, profile */}
        <button className="btn btn-outline-primary">Settings</button>
      </div>
    </div>
  );
}
