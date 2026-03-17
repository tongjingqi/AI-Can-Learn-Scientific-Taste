<div align="center">

# AI Can Learn Scientific Taste

<a href='https://arxiv.org/abs/2603.14473'><img src='https://img.shields.io/badge/arXiv-2603.14473-b31b1b.svg'></a>
<a href='https://huggingface.co/collections/OpenMOSS-Team/ai-can-learn-scientific-taste'><img src='https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Models%20%26%20Datasets-yellow'></a>
<a href='https://huggingface.co/papers/2603.14473'><img src='https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Paper-yellow'></a>
<a href='https://tongjingqi.github.io/AI-Can-Learn-Scientific-Taste/'><img src='https://img.shields.io/badge/🌐%20Project-Page-blue'></a>
<a href='https://yatao-zhuozhuo.github.io/AI-Innovator/'><img src='https://img.shields.io/badge/🎮%20Demo-Online-orange'></a>
<a href='LICENSE'><img src='https://img.shields.io/badge/License-Apache%202.0-green.svg'></a>

English | [中文](README_zh.md)

</div>

<div align="center">
  <a href="https://huggingface.co/papers/week/2026-W12">
    <img src="assets/huggingface_paper_gold_week.svg"/>
  </a>
</div>

## 🎊 News

- [2026.03] 🎮 Online Demo is now available! [[Demo](https://yatao-zhuozhuo.github.io/AI-Innovator/)]
- [2026.03] 📄 Paper available on arXiv. [[arXiv](https://arxiv.org/abs/2603.14473)]
- [2026.03] 🤗 Models released on Hugging Face. [[Collection](https://huggingface.co/collections/OpenMOSS-Team/ai-can-learn-scientific-taste)]

## 📌 Table of Contents

- [Introduction](#-introduction)
- [Overview of RLCF](#️-overview-of-rlcf)
- [Core Components](#-core-components)
- [Key Results](#-key-results)
- [Citation](#-citation)
- [License](#️-license)

## 📜 Introduction

Great scientists do not rely on execution ability alone. They also possess strong judgement and foresight, which we refer to as **scientific taste**: the capacity to judge and propose research ideas with high potential impact.

We propose **Reinforcement Learning from Community Feedback (RLCF)**, a training paradigm that uses large-scale community signals as supervision and formulates scientific taste learning as a preference modeling and alignment problem.

To make this possible, we construct **SciJudgeBench**, a large-scale benchmark of **696,758** field- and time-matched paper pairs derived from **2.1M** arXiv papers published through 2024. We then train:

- **Scientific Judge**: a generative reward model that predicts which paper in a pair is more likely to have higher impact.
- **Scientific Thinker**: a policy model that proposes follow-up research ideas with higher potential impact.

<div align="center">
  <img src="assets/overview.png" width="100%" alt="Overview of Reinforcement Learning from Community Feedback" />
</div>

## 🏗️ Overview of RLCF

RLCF consists of three stages:

1. **Construct community preference**
   Citations are converted into pairwise preference signals by matching papers within the same field and publication period.
2. **Preference modeling with Scientific Judge**
   We train a generative reward model with GRPO to determine which of two papers is more likely to receive stronger community reception.
3. **Preference alignment with Scientific Thinker**
   We use Scientific Judge as a reward model and optimize a policy model with comparison-based GRPO to generate higher-impact research ideas.

## 🧩 Core Components

### Scientific Judge

- A scientific judgement model trained on pairwise comparisons of titles, abstracts, and publication dates.
- Learns to identify which paper has higher potential impact.
- Serves both as an evaluator of newborn papers and as the reward model for ideation training.

### Scientific Thinker

- A scientific ideation policy trained with Scientific Judge as the reward model.
- Given a seed paper, it proposes follow-up research ideas with high potential impact.
- Optimized with comparison-based GRPO for open-ended idea generation.

### SciJudgeBench

- **696,758** preference pairs and roughly **1.4M** unique papers.
- Built from arXiv papers across **Computer Science**, **Mathematics**, **Physics**, and **Other** scientific fields.
- Evaluated on four settings: **in-domain**, **temporal OOD** (future-year papers), **metric OOD** (ICLR peer review), and **field OOD** (bioRxiv biology papers).

## 📈 Key Results

Our paper shows that scientific taste can be learned and transferred:

- **Scientific judgement scales** with both data size and model size.
- **Learned judgement generalizes** across time, across fields, and from citations to peer-review preferences.
- **Scientific Thinker improves ideation quality** and surpasses strong baselines in pairwise comparisons.

<div align="center">
  <img src="assets/performance_teaser.png" width="100%" alt="Main performance results" />
</div>

## 🔎 Citation

If you find our work helpful, please consider citing:

```bibtex
@misc{tong2026ailearnscientifictaste,
    title={AI Can Learn Scientific Taste},
    author={Jingqi Tong and Mingzhe Li and Hangcheng Li and Yongzhuo Yang and Yurong Mou and Weijie Ma and Zhiheng Xi and Hongji Chen and Xiaoran Liu and Qinyuan Cheng and Ming Zhang and Qiguang Chen and Weifeng Ge and Qipeng Guo and Tianlei Ying and Tianxiang Sun and Yining Zheng and Xinchi Chen and Jun Zhao and Ning Ding and Xuanjing Huang and Yugang Jiang and Xipeng Qiu},
    year={2026},
    eprint={2603.14473},
    archivePrefix={arXiv},
    primaryClass={cs.CL},
    url={https://arxiv.org/abs/2603.14473},
}
```

## ⚖️ License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.
