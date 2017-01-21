CREATE TABLE gym_type_preference (
    id bigserial PRIMARY KEY,
    gym_type_id int8 NOT NULL,
    user_id int8 NOT NULL,
    status VARCHAR(15) NOT NULL,
    created DATE DEFAULT CURRENT_DATE,

    CONSTRAINT gtp_constr UNIQUE (gym_type_id, user_id)
);

CREATE OR REPLACE RULE gtp_ignore_dup_ins AS
    ON INSERT TO gym_type_preference
    WHERE (EXISTS (SELECT 1 FROM gym_type_preference WHERE (gym_type_id, user_id)=(NEW.gym_type_id, NEW.user_id)))
    DO INSTEAD NOTHING;