class CreateProjectMembershipRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :project_membership_roles do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.references :role, null: false, foreign_key: true

      t.timestamps
    end
  end
end
