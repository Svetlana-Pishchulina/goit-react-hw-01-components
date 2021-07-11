import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const colors = ["#DEB887", "#F4A460", "#B8860B", "#8B4513", "#800000"];

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li
            className={styles.item}
            key={id}
            style={{
              backgroundColor: colors[index % 5],
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = { title: "" };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
