export type Experience = {
  role: string;
  company: string;
  companyDetail: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Vigiles Robotics Inc.",
    companyDetail: "Semantic Mapping for an LLM-Driven Inspection Robot",
    location: "Milpitas, CA",
    period: "Jul 2026 – Present",
    bullets: [
      "Developing the semantic mapping module for an LLM-driven quadruped inspection robot operating in indoor environments (offices, factories, campuses), targeting on-board deployment on Jetson AGX Orin 64GB (Ubuntu 22.04, ROS 2 Humble)",
      "Building a multimodal perception pipeline fusing Livox Mid-360 LiDAR (FAST-LIO2 odometry) with pan-tilt RGB-D camera streams; calibrated camera–LiDAR extrinsics via multi-pose joint ICP on real robot data, achieving 8.8 cm RMS residual",
      "Deploying open-vocabulary object detection with a quantized 3B-parameter VLM (ggml, CPU-only) paired with Qwen3-1.7B–generated scene-specific vocabularies (~15–17 classes per environment), producing semantically annotated maps in the osmAG format",
      "Designing a layered tool-calling interface that grounds the robot's LLM agent in physical space: 9 low-level map-query tools dispatched through a custom lightweight ROS 2 service RPC, wrapped by 2 LLM-facing skills routing natural-language queries (\"where is X\", \"how many Y\") to spatial lookup and inventory functions",
      "Architecting a pluggable SLAM adapter abstraction supporting FAST-LIO2 in production with reserved interfaces for ICP-class alternatives"
    ]
  }
];
