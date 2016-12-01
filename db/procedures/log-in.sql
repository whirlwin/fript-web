CREATE OR REPLACE FUNCTION log_in_func(
  id VARCHAR(50),
  email VARCHAR(254),
  name VARCHAR(100)
)
RETURNS TABLE (
  id VARCHAR(100)/*,
  email VARCHAR(254),
  name VARCHAR(100)
  */
)AS $$

SELECT id FROM users;

$$ LANGUAGE sql;