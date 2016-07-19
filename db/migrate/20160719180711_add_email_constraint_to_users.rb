class AddEmailConstraintToUsers < ActiveRecord::Migration
  def up
    execute %{
      ALTER TABLE
        users
      ADD CONSTRAINTS
        email_must_be_company_email
      CHECK ( email ~* '^[^@]+@example//.com' )
    }
  end
  def down
    execute %{
      ALTER TABLE
        users
      DROP CONSTRAINTS
        email_must_be_company_email
    }
  end
end
