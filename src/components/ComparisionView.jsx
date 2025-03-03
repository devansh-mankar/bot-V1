import React from "react";

function ComparisonView({ platforms, feature }) {
  // This component is used for showing side-by-side comparisons of CDPs
  return (
    <div className="comparison-table">
      <div className="comparison-header">
        <div className="feature-name">{feature}</div>
        {platforms.map((platform) => (
          <div key={platform.name} className="platform-name">
            {platform.name}
          </div>
        ))}
      </div>
      <div className="comparison-rows">
        {platforms.map((platform) => (
          <div key={platform.name} className="platform-feature">
            {platform.features[feature]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComparisonView;
