import { nodeEnv } from '../config/environment';
import sequelize from './connection';

const buildModels = async () => sequelize.sync({ force: true });

if (nodeEnv !== 'test') buildModels();
export default buildModels;
