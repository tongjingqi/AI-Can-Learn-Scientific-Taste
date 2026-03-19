<div align="center">

# AI Can Learn Scientific Taste

<a href='https://arxiv.org/abs/2603.14473'><img src='https://img.shields.io/badge/arXiv-2603.14473-b31b1b.svg'></a>
<a href='https://huggingface.co/collections/OpenMOSS-Team/ai-can-learn-scientific-taste'><img src='https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Models%20%26%20Datasets-yellow'></a>
<a href='https://huggingface.co/papers/2603.14473'><img src='https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Paper-yellow'></a>
<a href='https://tongjingqi.github.io/AI-Can-Learn-Scientific-Taste/'><img src='https://img.shields.io/badge/🌐%20Project-Page-blue'></a>
<a href='https://yatao-zhuozhuo.github.io/AI-Innovator/'><img src='https://img.shields.io/badge/🎮%20Demo-Online-orange'></a>
<a href='LICENSE'><img src='https://img.shields.io/badge/License-Apache%202.0-green.svg'></a>

[English](README.md) | 中文

</div>

<div align="center">
  <a href="https://huggingface.co/papers/month/2026-03">
    <img src="assets/huggingface_paper_gold_month.svg"/>
  </a>
</div>

## 🎊 最新动态

- [2026.03] 🎮 在线 Demo 现已上线！[[Demo](https://yatao-zhuozhuo.github.io/AI-Innovator/)]
- [2026.03] 📄 论文已发布在 arXiv 上。[[arXiv](https://arxiv.org/abs/2603.14473)]
- [2026.03] 🤗 模型已发布在 Hugging Face 上。[[Collection](https://huggingface.co/collections/OpenMOSS-Team/ai-can-learn-scientific-taste)]

## 📌 目录

- [简介](#-简介)
- [RLCF 概述](#️-rlcf-概述)
- [核心组件](#-核心组件)
- [主要结果](#-主要结果)
- [引用](#-引用)
- [许可证](#️-许可证)

## 📜 简介

杰出的科学家具备卓越的判断力和前瞻性，这与我们所说的**科学品味（scientific taste）**密切相关：即判断和提出具有高潜在影响力的研究想法的能力。然而，大多数相关研究聚焦于提升AI科学家的执行能力，而增强AI的科学品味仍未被充分探索。

我们提出了**基于社区反馈的强化学习（RLCF）**，这是一种利用大规模社区信号作为监督的训练范式，将科学品味的学习建模为偏好建模与对齐问题。

为此，我们构建了 **SciJudgeBench**，一个包含 **696,758** 个领域和时间匹配论文对的大规模基准，来源于截至 2024 年发表的 **210 万**篇 arXiv 论文。我们在此基础上训练了：

- **Scientific Judge**：一个生成式奖励模型，预测论文对中哪篇更可能产生更高影响力。
- **Scientific Thinker**：一个策略模型，提出更具潜在影响力的后续研究想法。

<div align="center">
  <img src="assets/overview.png" width="100%" alt="基于社区反馈的强化学习概览" />
</div>

## 🏗️ RLCF 概述

RLCF 包含三个阶段：

1. **构建社区偏好**
   将引用量转化为配对偏好信号，方法是匹配同一领域、同一发表时期的论文。
2. **使用 Scientific Judge 进行偏好建模**
   使用 GRPO 训练一个生成式奖励模型，对一对论文摘要进行推理，预测哪篇更可能产生更高影响力。
3. **使用 Scientific Thinker 进行偏好对齐**
   以 Scientific Judge 作为奖励模型，使用基于比较的 GRPO 优化策略模型，生成更高影响力的研究想法。

## 🧩 核心组件

### Scientific Judge

- 一个生成式奖励模型，对配对论文摘要进行推理，预测哪篇具有更高的潜在影响力。
- 使用 GRPO 在 696K 个领域和时间匹配的基于引用的偏好对上训练。
- 既可作为研究想法的评估器，也可作为 Scientific Thinker 训练的奖励模型。

### Scientific Thinker

- 以 Scientific Judge 为奖励模型训练的科学创意策略。
- 以论文标题和摘要为输入，提出与社区偏好一致的、具有更高潜在影响力的后续研究想法。
- 使用基于比较的 GRPO 针对开放式创意生成进行优化。

### SciJudgeBench

- **696,758** 个偏好对，约 **140 万**篇独立论文。
- 来源于**计算机科学**、**数学**、**物理**及**其他**科学领域的 arXiv 论文。
- 在三种主要设置下评估：**域内**、**时间 OOD**（未来年份论文）和**指标 OOD**（ICLR 同行评审），另加 **bioRxiv** 作为跨领域补充评估。

## 📈 主要结果

我们的论文表明，科学品味可以被学习和迁移：

- **科学判断力随数据规模和模型规模增长**而提升。
- **Scientific Judge-Qwen3-30B 超越了 GPT-5.2、GLM-5 和 Gemini 3 Pro**，在域内评估中达到 80.6（最佳基线为 75.7），并泛化至未来年份论文（相对基础模型 +55.1）和 ICLR 同行评审偏好。
- **习得的判断力可以泛化**——跨时间、跨领域（bioRxiv），从引用偏好到同行评审偏好。
- **Scientific Thinker 达到 54.2% 的平均胜率**，超越 GPT-5.2、GLM-5 和 Gemini 3 Pro，大幅优于其基础策略（30.3%），在域内和域外设置上均表现出色。

<div align="center">
  <img src="assets/performance_teaser.png" width="100%" alt="主要性能结果" />
</div>

## 🔎 引用

如果我们的工作对您有帮助，请考虑引用：

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

## ⚖️ 许可证

本项目采用 Apache License 2.0 许可证。详见 [LICENSE](LICENSE)。
